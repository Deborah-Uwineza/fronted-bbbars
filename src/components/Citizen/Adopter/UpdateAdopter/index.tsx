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

const AddAdopter = (props: any) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    adopterMessage,
    configMenuErrors,
    enfants,
    countrys,
    adopter,
    setState,
  } = props;
  //setState(adopter);
  console.log(enfants);

  const {nationId,country,enfantId} = state;
  

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={adopterMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Add Adopter"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Add New Adopter</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                 name="nationId"
                 value={nationId}
                 label="National_Id"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
              //   name="country"
              //   required
              //   value={country}
              //   label="country"
              //   onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              
              // />
               id="outlined-select-currency"
                  select
                  label="Select"
                  name="country"
                  value={country}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                  helperText="Please select country"
                >
                  {countrys.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextInput>

<TextInput
                  id="outlined-select-currency"
                  select
                  label="Select"
                  name="enfantId"
                  value={enfantId}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                  helperText="Please select Children"
                >
                  {enfants.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.names}
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

export default AddAdopter;
