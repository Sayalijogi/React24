import React from "react";
import Rows from "./Rows";

function Table() {
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>City</th>
            </tr>
            <tbody>
                <tr>
                    <Rows></Rows>
                </tr>
            </tbody>
        </table>
    )
}
export default Table