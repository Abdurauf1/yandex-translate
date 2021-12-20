import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Input from '../components/input'
import Navbar from "../components/navbar/index"
import TranslateCol from '../components/translateCol';
import { Col, Container } from "./style";

function MainPage() {

    useEffect(
        () => getTranslatedWords('')
    )

    const key = "dict.1.1.20201201T163137Z.5c6593134cc1fcb4.7ea53295a0777094051036688cd986b837fc9391";

    const [translated, setTranslated] = useState()

    const getTranslatedWords = (lang, text) => {
        axios
            .get("https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=" + key + "&lang=" + lang + "&text=" + text)
            .then((value) => {
                console.log(value);
                setTranslated(value.data)
            })
    }

    return (
        <>
            <Navbar />
            <Container>
                <Col>
                    <Input getTranslatedWords={getTranslatedWords} />
                </Col>
                <Col>
                    <TranslateCol translated={translated} />
                </Col>
            </Container>
        </>
    )
}

export default MainPage