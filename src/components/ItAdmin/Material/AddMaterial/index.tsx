import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";

import "./style.scss";
import { Button, Grid, MenuItem, Paper } from "@mui/material";
import ModalBox from "../../../UI/Modal/MessageAlert";
import TextInput from "../../../UI/Inputs/TextInput";


type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

const AddMaterial = (props: any) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    materialMessage,
    configMenuErrors,
    items,
    statuses
    
    ,
  } = props;

  console.log(items);

  const {PropertiesNo,quantity,quality,status,itemId} = state;

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={materialMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Add Material"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Add New Material</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                name="PropertiesNo"
                value={PropertiesNo}
                label="PropertiesNo"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
                  id="outlined-select-currency"
                  select
                  label="Select"
                  name="itemId"
                  value={itemId}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                  helperText="Please select Item"
                >
                  {items.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextInput>

<TextInput
                name="quantity"
                required
                value={quantity}
                label="quantity"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="quality"
                required
                value={quality}
                label="quality"
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

export default AddMaterial;
