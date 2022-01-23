import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";

import "./style.scss";
import { Button, Grid,MenuItem, Paper } from "@mui/material";
import ModalBox from "../../../UI/Modal/MessageAlert";
import TextInput from "../../../UI/Inputs/TextInput";


type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

const AddEnfant = (props: any) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    enfantMessage,
    configMenuErrors,
    statuses,
  } = props;

  const {names,parentNames,age,country, reasons,image,status} = state;
  

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={enfantMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Add Enfant"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Add New Enfant</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                name="names"
                value={names}
                label="names"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
                name="parentNames"
                required
                value={parentNames}
                label="parentNames"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="age"
                required
                value={age}
                label="Date_of_Birth"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="country"
                required
                value={country}
                label="country"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="reasons"
                required
                value={reasons}
                label="reasons"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
              
              <TextInput
                name="image"
                required
                value={image}
                label="image"
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

export default AddEnfant;
