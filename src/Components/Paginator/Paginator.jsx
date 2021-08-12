import React from 'react'
import st from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentUsersPage, ...props}) => {
    // debugger
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={(currentUsersPage === p) && st.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;