import styled from "styled-components"



export const MainTop = styled.div`

    position: absolute; top: 80px; left: 0;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(0, 0, 0, 0.05);

    .navigation {
        height: 100%;
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .leftNav {
        height: 100%;
        width: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;


        .searchLogo{
            height: 100%;
            width: 20%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        
        }

        .searchText{
            height: 100%;
            width: 80%;
            display: flex;
            flex-direction: row;
            align-items: center;
            @include grayText;
            justify-content: space-between;
        }

      }

      .rightNav {
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        @include grayText;

        .liked {
            justify-content: space-between;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
            color: black;
            border-bottom: 2px solid black;
        }

        .friends{
            justify-content: space-between;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
        }

        .follows{
            justify-content: space-between;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
        }

      }


    }

`