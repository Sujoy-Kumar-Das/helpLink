import { Box, Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import { z } from "zod";
import image from "../../assets/contact.png";
import From from "../from/From";
import FromTextArea from "../from/FromTextArea";
import InputField from "../from/InputField";
import CustomContainer from "../ui/shared/CustomContainer";
import Header from "../ui/shared/Header";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export default function ContactHome() {
  const handleContactFrom = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <CustomContainer>
      <Header
        title="Let's Connect"
        subTitle="Reach Out to Us - Together, We Make a Difference"
      />
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 8,
        }}
      >
        <Box
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          component={"div"}
          sx={{ width: { xs: "100%", md: "50%" } }}
        >
          <From handler={handleContactFrom} schema={contactSchema}>
            <InputField label="Name" type="text" name="name" />
            <InputField label="Email" type="email" name="email" />
            <InputField label="Subject" type="text" name="subject" />
            <FromTextArea label="Message" name="message" type="text" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ mt: 3 }}
            >
              <p style={{ margin: "0px  10px 0px 0px" }}>Send</p> <IoSend />
            </Button>
          </From>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          component={"div"}
          sx={{ width: { xs: "100%", md: "50%" } }}
        >
          <img
            src={image}
            alt="contact image"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
    </CustomContainer>
  );
}
