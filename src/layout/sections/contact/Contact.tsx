import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {

  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_dppadui', 'service_dppadui', form.current, {
        publicKey: 'rRybTeCOhwW4_gI4g',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()
  };


  return (
    <S.Contact id={"contact"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={'Name'} name={"user_name"}/>
          <S.Field required placeholder={'Email'} name={"email"}/>
          <S.Field required placeholder={'Subject'} name={"subject"}/>
          <S.Field required placeholder={'Message'} as={'textarea'} name={"message"}/>
          <Button type={'submit'}>Send Message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}

