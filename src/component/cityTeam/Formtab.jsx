import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import ResponsiveAppBar from "../login/ResponsiveAppBar";
import Form from "./Form";
import { useEffect } from "react";
import { getFormData, uploadImagesApi } from "../../apis/formsApis/formsApi";
import { useContext } from "react";
import { FormContext } from "../../store/formsData/formDataContext";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../helper/localStorage";
import { axios } from "../../helper/axios";
import { CircularProgress } from "@mui/material";
import Stack from "../../common/Stack";
import { AuthContext } from "../../store/authContext/AuthContext";
import DialogConfirmation from "../Dialoge/DialogeConfirmation";

export default function Formtab() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [submitFormData, setSubmitFormData] = useState({});
  const [images, setImages] = useState([]);
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const Navigate = useNavigate();
  const { setSnackbar } = useContext(AuthContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const form_data = useContext(FormContext);
  const { tabs, formContent, answerContent } = form_data.formContent;
  const { state } = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    let index = tabs.findIndex((item) => item.id === newValue);
    setActiveFormIndex(index);
  };

  const addmore = () => {
    let tab = JSON.parse(JSON.stringify(tabs));
    tab.push({
      id: `${tabs[1].id}${tabs.length}`,
      label: `${tabs[1].label} ${tabs.length}`,
    });

    let formData = formContent[tabs[1].id];
    let form = JSON.parse(JSON.stringify(formContent));
    form[`${tabs[1].id}${tabs.length}`] = formData;
    let answerCon = submitFormData;
    let answer = answerContent[tabs[1].id];
    answerCon[`${tabs[1].id}${tabs.length}`] = answer;
    let data = form_data.formContent;
    let answerCon2 = answerContent;
    answerCon2[`${tabs[1].id}${tabs.length}`] = answer;
    data = {
      tabs: tab,
      formContent: form,
      answerContent: answerCon,
    };
    form_data.setFormContent({ ...data, answerContent: answerCon2 });
    setSubmitFormData(answerCon);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log("submitFormData0", submitFormData);
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    let res = await getFormData();
    if (state && state.case_id) {
      form_data.setUpdated(true);
      let defData = await axios.get( {
        params: {
          case_id: state.case_id,
        },
      });
      let dummyData = defData.data.data;

      let dummy = JSON.parse(JSON.stringify(res));
      dummy.answerContent["c4_details"] = {
        city: dummyData.city,
        date: dummyData.date,
        program: dummyData.program,
        trained_by: dummyData.trained_by,
        training_type: dummyData.training_type,
      };
      let formData = dummy.formContent[dummy.tabs[1].id];
      let formData1 = dummy.formContent[dummy.tabs[0].id];
      formData1[0] = { ...formData1[0], disabled: true };
      formData1[1] = { ...formData1[1], disabled: true };
      formData1[2] = { ...formData1[2], disabled: true };
      dummyData.member_details?.map((item, i) => {
        if (i === 0) {
          dummy.formContent[`${dummy.tabs[0]}`] = formData1;
          dummy.answerContent[`${dummy.tabs[1].id}`] = item;
        }
        if (i > 0) {
          dummy.tabs.push({
            id: `${dummy.tabs[1].id}${i + 1}`,
            label: `${dummy.tabs[1].label} ${i + 1}`,
          });
          dummy.answerContent[`${dummy.tabs[1].id}${i + 1}`] = item;
          dummy.formContent[`${dummy.tabs[1].id}${i + 1}`] = formData;
        }
      });
      form_data.setFormContent(dummy);
      setSubmitFormData(dummy.answerContent);
    } else {
      form_data.setUpdated(false);
      form_data.setFormContent(res);
      setSubmitFormData(res.answerContent);
    }
    setValue(res.tabs[0].id);
  };

  const handleOnPrev = () => {
    if (activeFormIndex !== 0) {
      setValue(tabs[activeFormIndex - 1].id);
      setActiveFormIndex(activeFormIndex - 1);
    }
  };

  const getAnswerSheet = (data) => {
    let answeerSheet = [];
    for (let a in data) {
      answeerSheet.push(data[a]);
    }
    return answeerSheet;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      //TO CHECK BEFORE DEPLOY
      if (tabs.length - 1 > activeFormIndex) {
        setActiveFormIndex(activeFormIndex + 1);
        setValue(tabs[activeFormIndex + 1]?.id);
      } else {
        //file upload section
        var ourData = submitFormData;

        let builderData = {};
        let user = getUser();

        let answerSheet = getAnswerSheet(ourData);
        builderData = {
          ...answerSheet[0],
          project_code: user.project_code,
          username: user.username,
          member_details: answerSheet.filter((t, i) => i !== 0),
        };

        form_data.setFormData(builderData);
        Navigate("/review");
      }
    } catch (e) {
      setSnackbar({
        open: true,
        message: "Failed while uploading images, please try again",
        severity: "error",
      });
    }
  };

  const handleOnChange = async (val, name, type) => {
    let currentFormData = submitFormData;
    let imageData = images;
    let empty =
      currentFormData && // 👈 null and undefined check
      Object.keys(currentFormData).length === 0 &&
      Object.getPrototypeOf(currentFormData) === Object.prototype;

    if (empty) {
      currentFormData = answerContent;
    }

    let buildFormData = JSON.parse(JSON.stringify(currentFormData));
    console.log("images", name);

    if (type === "image") {
      let formData = new FormData();
      formData.append("file", val[0]);
      const imageResponse = await uploadImagesApi(formData);
      buildFormData[value][name] = imageResponse.data.data.result.file.filename;
    } else {
      buildFormData[value][name] = val;
    }

    setSubmitFormData(buildFormData);
    console.log("builderFormData", buildFormData);
  };
  const deleteTab = () => {
    setDialogOpen(true);
  };
  const handleOnConfirm = () => {
    let tab = JSON.parse(JSON.stringify(tabs));

    let form = JSON.parse(JSON.stringify(formContent));
    delete form[`${tabs[1].id}${tabs.length - 1}`];
    let answerCon = submitFormData;
    delete answerCon[`${tabs[1].id}${tabs.length - 1}`];
    let data = form_data.formContent;
    tab.pop();
    data = {
      tabs: tab,
      formContent: form,
      answerContent: answerCon,
    };
    form_data.setFormContent(data);
    setSubmitFormData(answerCon);
    setActiveFormIndex(activeFormIndex - 1);
    setValue(tabs[activeFormIndex - 1]?.id);
    setDialogOpen(false);
  };

  if (isLoading) {
    return (
      <>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <CircularProgress />
        </Stack>
      </>
    );
  }

  return (
    <>
      <ResponsiveAppBar />
      {tabs && tabs.length > 0 ? (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {tabs?.map((item, i) => {
                  return (
                    <Tab
                      disabled={item?.id != value}
                      value={item?.id}
                      label={item?.label}
                      wrapped
                      key={i}
                    />
                  );
                })}
              </TabList>
            </Box>
            {value ? (
              <Box sx={{ padding: "20px" }}>
                <Form
                  formContent={formContent[value]}
                  addmore={() => addmore()}
                  handleOnChange={handleOnChange}
                  formData={submitFormData[value]}
                  handleOnSubmit={handleOnSubmit}
                  handleOnPrev={handleOnPrev}
                  tabLength={tabs.length}
                  activeFormIndex={activeFormIndex}
                  deleteTab={deleteTab}
                />
              </Box>
            ) : null}
          </TabContext>
        </Box>
      ) : null}

      <DialogConfirmation
        message1="Are you sure?"
        open={dialogOpen}
        handleClose={() => {
          setDialogOpen(false);
        }}
        onConfirm={handleOnConfirm}
      />
    </>
  );
}
