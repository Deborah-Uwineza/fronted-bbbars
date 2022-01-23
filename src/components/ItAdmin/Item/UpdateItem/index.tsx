import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";

import "./style.scss";
import { Button, Grid, Paper ,MenuItem } from "@mui/material";
import ModalBox from "../../../UI/Modal/MessageAlert";
import TextInput from "../../../UI/Inputs/TextInput";


type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

const UpdateItem = (props: any) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    itemMessage,
    configMenuErrors,
    statuses,
    item,
   setState,
  } = props;

  // setState(item);
  const {name,image,description,status} = state;
  

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={itemMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Update Item"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Update New Item</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                name="name"
                value={name}
                label="name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />
              
   
    

              <TextInput
                name="image"
                required
                value={image}
                label="image"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="description"
                required
                value={description}
                label="description"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />


<TextInput
                id="outlined-select-currency"
                select
                label="Select"
                name="status"
                value={status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                helperText="Please select Status"
              >
                {statuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextInput>
              
              

              <Stack spacing={2} direction="row">
                <Button href="/manager/items" color="error" variant="outlined">
                  Cancel
                </Button>
                <Button type="submit" color="primary" variant="outlined">
                  Submit
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateItem;

