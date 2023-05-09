import React from "react";
import TagFieldBuilder from "../../common/TagFieldbuilder";
import Box from "../../common/Box";
import Button from "../../common/Button";

export default function Form({
  tabLength,
  formContent,
  handleOnChange,
  addmore,
  handleOnPrev,
  formData,
  handleOnSubmit,
  activeFormIndex,
  deleteTab,
}) {
  return (
    <>
      <form onSubmit={handleOnSubmit.bind(this)}>
        {formContent?.map((element) => (
          <TagFieldBuilder
            handleOnChange={handleOnChange}
            {...element}
            inputValue={formData}
          />
        ))}

        <Box
          sx={{
            typography: "body1",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              title={"Prev"}
              sx={{ marginTop: "20px", width: "140px", marginRight: "10px" }}
              onClick={handleOnPrev}
            />
            {tabLength - 1 === activeFormIndex ? (
              <>
                <Button
                  title={"Add more"}
                  sx={{
                    marginTop: "20px",
                    width: "140px",
                    marginRight: "10px",
                  }}
                  onClick={addmore}
                />
                {tabLength > 2 ? (
                  <Button
                    title={"Delete"}
                    sx={{ marginTop: "20px", width: "140px" }}
                    onClick={deleteTab}
                  />
                ) : null}
              </>
            ) : null}
          </div>

          <Button
            sx={{ marginTop: "20px", width: "140px" }}
            title={tabLength - 1 === activeFormIndex ? "Submit" : "Next"}
            type="submit"
          />
        </Box>
      </form>
    </>
  );
}
