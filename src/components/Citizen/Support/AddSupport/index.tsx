import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";

import "./style.scss";
import { Button, Grid, Paper } from "@mui/material";
import TextInput from "../../../UI/Inputs/TextInput";
import ModalBox from "../../../UI/Modal/MessageAlert";

type IModalState = {
  open: boolean;
};

interface IErrors {
  status: number;
  statusText: string;
}

const AddSupport = (props: any) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    supportMessage,
    configMenuErrors,
  } = props;

  const {National_Id,country,city,gender,dob,supportType} = state;
  
  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={supportMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Add Support"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Add New Support</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                name="National_Id"
                value={National_Id}
                label="National_Id"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
                name="country"
                required
                value={country}
                label="country"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="city"
                required
                value={city}
                label="city"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="gender"
                required
                value={gender}
                label="gender"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="dob"
                required
                value={dob}
                label="dob"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="supportType"
                required
                value={supportType}
                label="supportType"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
             
              

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

export default AddSupport;
