import React from 'react'
import Button from '@mui/material/Button'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'


const ButtonComponent = ({ type = "plus", content, ...props }) => {
  return (
    <Button
      {...props}
      style={{ display: "flex", gap: "5px", aliginItems: "center" }}
      color="info"
    >
      {
        type === "update" ? <CreateOutlinedIcon /> : <AddCircleOutlinedIcon />
      }
      {content && <span>{content}</span>}
    </Button>
  )
}

export default ButtonComponent