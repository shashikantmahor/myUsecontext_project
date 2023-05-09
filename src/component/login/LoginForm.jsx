import React from "react";
import Button from "../../common/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import Input from "../../common/Input";
import * as yup from "yup";
import { AppStyle } from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/authContext/AuthContext";
import { setUser } from "../../helper/localStorage";
import { axios } from "../../helper/axios";
import { loginApi } from "../../helper/constants";

const validateLoginForm = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = (props) => {
  const Navigate = useNavigate();
  const { loading, source } = props;
  const initialValues = {
    username: "",
    password: "",
  };
  const { setSnackbar } = useContext(AuthContext);

  const onFormSubmit = async (values) => {
    let res = await axios.get(loginApi, {
      params: {
        username: values.username,
        password: values.password,
        source: source,
      },
    });
    if (res.data.status == "err") {
      setSnackbar({
        open: true,
        message: res.data.msg,
        severity: "error",
      });
    } else {
      setUser(JSON.stringify(res.data.data));
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onFormSubmit(values);
        }}
        validationSchema={validateLoginForm}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          values,
          touched,
          errors,
        }) => (
          <>
            <Container maxWidth="xs">
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: "100vh",
                  width: "auto",
                  mx: 4,
                }}
                spacing={1.5}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontSize: "28px",
                  }}
                >
                  Login
                </Typography>

                <Typography
                  variant="subtitle2"
                  align="center"
                  sx={{ fontSize: "15px", color: "#7D7D7D" }}
                >
                  Welcome Back
                </Typography>

                <Input
                  type="text"
                  fullWidth
                  placeholder="Enter Username"
                  id="username"
                  name="username"
                  variant="outlined"
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  error={!touched.username && Boolean(errors.username)}
                  helperText={!touched.username && errors.username}
                />
                <Input
                  type="password"
                  fullWidth
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  variant="outlined"
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={!touched.password && Boolean(errors.password)}
                  helperText={!touched.password && errors.password}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />

                <Button
                  onClick={handleSubmit}
                  disabled={!isValid}
                  loading={loading}
                  fullWidth
                  sx={{
                    backgroundColor: AppStyle.primaryBG,
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: AppStyle.primaryBG,
                    },
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Container>
          </>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
