import styled from "styled-components";

export const CalculateContainer = styled.div`
    width: 90vw;
    max-width: 1400px;
    height: 55vh;
    border: 2px solid #220A76;
    border-radius: 10px;
    box-shadow: 1px 1px 10px black;
    overflow: hidden;
    backdrop-filter: blur(20px);

    .container {
        min-width: 100%;
        min-height: 40%;

        display: flex;
        align-items: center;
        justify-content: space-around;

        div {
            width: 150px;
            height: 70px;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            label {
                color: #fff;
                margin-bottom: 5px;
                cursor: pointer;
            }

            input {
                width: 100%;
                height: 25px;
                border-radius: 2px;
                text-align: center;
            }

            input#input_average_price {
                background: #fff;
                cursor: text;
            }
        }
    }

    .two {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .sub_container {
            min-width: 100%;
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: row;
        }
    }

    .three {
        min-height: 20%;

        button {
            padding: 10px 20px;
            cursor: pointer;
            font-size: 1.5em;
            border-radius: 2px;
            transition: .5s ease;
            background: #220A76;
            color: #fff;

            &:hover {
                border-radius: 10px;
            }
        }
    }
`;