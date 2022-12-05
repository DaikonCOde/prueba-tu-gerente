import styled from "styled-components";

export const ContentTabla = styled.div.attrs({
    className: 'tabla'
})`

    table.table {
        width: 1000px;
        border-collapse: collapse;

        thead tr th, tbody tr td {
            padding: 5px 15px;
            border-bottom: 1px solid #b2b2b2;
        }
        tbody {
            margin: 10px 0 0 0;
        }
        tbody tr td {
            padding-top: 10px;
            text-align: center;

        }
    }


    .btn-download {
        background: green;
        margin: 0 0 50px auto;
        display: block;
        width: 200px;
        text-decoration: none;
    }

    .btn {
        padding: 8px 16px;
        text-align: center;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s linear
    }

    .primary {
        background: rgb(62, 157, 210);
        &:hover {
            background: rgb(62, 157, 180);
        }
    }

`