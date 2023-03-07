import React from 'react'
import './index.css'

function Table(props) {
  return (
    <div class="tablerounededCorner">
    <table class="table roundedTable">
        {props.children}
    </table>
</div>
  )
}

export default Table