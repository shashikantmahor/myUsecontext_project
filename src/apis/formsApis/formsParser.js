import _ from "lodash";
import { getUser } from "../../helper/localStorage";

const getTag = (dataType) => {
  let tag = "input";
  switch (dataType) {
    case "edittext":
      tag = "input";
      break;
    case "date":
      tag = "input";
      break;
    case "dropdown":
      tag = "select";
      break;
    case "image":
      tag = "input";
      break;
    default:
      tag = "input";
  }
  return tag;
};

const getInputType = (type) => {
  let tagType = "text";
  switch (type) {
    case "date":
      tagType = "date";
      break;
    case "string":
      tagType = "text";
      break;
    case "dropdown":
      tagType = "select";
      break;
    case "file":
      tagType = "file";
      break;
    default:
      tagType = "text";
  }
  return tagType;
};

const getInputAttributes = (tag, e) => {
  let validation = _.get(e, "validation", []);
  let attributes = {};
  attributes = {
    name: _.get(e, "label_key", "default_name"),
    type: getInputType(_.get(e, "value_type", "text")),
  };
  if (validation.length > 0) {
    attributes["required"] = _.get(validation[0], "required_field", false);
  }
  return { attributes: { props: attributes }, answerSheet: "" };
};

const getSelectAttributes = (tag, e) => {
  let options = [];
  let attributes = {};
  let validation = _.get(e, "validation", []);

  attributes = {
    name: _.get(e, "label_key", "default_name"),
    type: getInputType(e, "value_type", "text"),
  };
  if (validation.length > 0) {
    attributes["required"] = _.get(validation[0], "required_field", false);
  }
  let optionAttribute = _.get(e, "url_options", {});
  let apiRes = _.get(e, "options", []).map((option) => {
    return getAttributes("option", option);
  });

  return {
    attributes: {
      props: attributes,
      isClosing: true,
      innerContent: true,
      innerContentValueType: getInputType(e, "value_type", "text"),
      contentvalue: apiRes,
      defaultValue: apiRes[0].props.value,
    },
    answerSheet: apiRes.length > 0 ? apiRes[0]["props"]["value"] : "",
  };
};

const getOptionAttributes = (tag, value) => {
  return {
    props: {
      value: value,
      innerHTML: value,
    },
    isClosing: true,
  };
};

const getAttributes = (tag, data) => {
  let element = {};
  switch (tag) {
    case "input":
      element = getInputAttributes(tag, data);
      break;
    case "select":
      element = getSelectAttributes(tag, data);
      break;
    case "option":
      element = getOptionAttributes(tag, data);
      break;
    default:
      element = {};
  }

  return element;
};

export const parseData = (res) => {
  let tabs = [];
  let formContent = {};
  let answerContent = {};
  if (res && res.data) {
    res = res.data;
  }
  const user = getUser();
  if (!res) {
    return [];
  }

  const data = res;
  const multiFormData =
    data["data"][0]["configuration"]["multitab_screen"][
      "multitab_screencontent"
    ];
  multiFormData.map((e, i) => {
    let content = _.get(e, "content", []);

    let tabData = {
      label: _.get(e, "form_name", `tab${i}`),
      id: _.get(e, "form_id", `tab${i}`),
      position: _.get(e, "form_position", i),
    };
    tabs[i] = tabData;
    answerContent[tabData["id"]] = {};

    let formData = content.map((c, j) => {
      let tagName = getTag(_.get(c, "value"));
      let attributes = getAttributes(tagName, c);
      answerContent[tabData["id"]][attributes.attributes.props.name] =
        attributes.answerSheet ?? "0";
      if (attributes.attributes.props.name == "city") {
        answerContent[tabData["id"]][attributes.attributes.props.name] =
          user?.city ? user.city : "Banglore";
      }

      let mLabel = _.get(c, "label", `content${j}`);
      if (mLabel == "City*") {
        return {
          label: mLabel,
          attributes: attributes.attributes,
          tag: tagName,
          disabled: true,
        };
      } else {
        return {
          label: mLabel,
          attributes: attributes.attributes,
          tag: tagName,
          disabled: false,
        };
      }
    });
    formContent[tabData["id"]] = formData;
  });
  return {
    formContent,
    tabs,
    answerContent,
    module_code: data["data"][0]["module_code"],
  };
};

export const parseStoreData = (res) => {
  if (res && res.data) {
    res = res.data;
  }

  if (!res) {
    return [];
  }

  if (!res.data) {
    return [];
  }

  console.log(res);
  const data = res.data.map((e) => {
    return e;
  });
  return data;
};
