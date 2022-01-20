import { useState } from 'react'
import { InputBox, Textarea, TrFromToBox, Select } from "./style.js"

function Input({ getTranslatedWords }) {

    const [inputText, setInputText] = useState('')

    const langs = [
        "ru-en", "ru-pl", "ru-uk",
        "ru-de", "ru-fr", "ru-es", "ru-it",
        "ru-tr", "en-ru", "en-de",
        "en-fr", "en-es", "en-it", "en-tr",
        "pl-ru", "uk-ru", "de-ru", "de-en",
        "fr-ru", "fr-en", "es-ru", "es-en",
        "it-ru", "it-en", "tr-ru", "tr-en"
    ]

    const langToStr = (lang) => {
        switch (lang) {
            case "ru":
                return "Russian"
            case "en":
                return "English"
            case "pl":
                return "Polandish"
            case "uk":
                return "Ukrainian"
            case "de":
                return "German"
            case "fr":
                return "French"
            case "es":
                return "Spanish"
            case "it":
                return "Italian"
            case "tr":
                return "Turkish"
            default:
                return ''
        }
    }

    const langsText = (langs, number) => {
        const lang = langs.split("-")
        return langToStr(lang[number])
    }

    const [chosenLang, setChosenLang] = useState("en-ru")

    return (
        <>
            <InputBox>
                <TrFromToBox>
                    <Select value={chosenLang} onChange={(e) => setChosenLang(e.target.value)}>
                        {
                            langs.map(
                                (lang) => <option
                                    value={lang}>{langsText(lang, 0)} &#10142; {langsText(lang, 1)}</option>
                            )
                        }
                    </Select>
                </TrFromToBox>
                <Textarea rows={4}
                    placeholder={"Start typing or insert a link"}
                    value={inputText}
                    onChange={(e) => {
                        getTranslatedWords(chosenLang, e.target.value.split(" ").join("+"))
                        setInputText(e.target.value)
                        console.log(e.target.value.split(" ").join("+"));
                    }}
                />
            </InputBox>
        </>
    )
}

export default Input
