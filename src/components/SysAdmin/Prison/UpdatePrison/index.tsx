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

const UpdatePrison = (props: any) => {
  const {
    onChange,
    state,
    onSubmit,
    handleClose,
    modalState,
    prisonMessage,
    configMenuErrors,
    prison,
    setState,
  } = props;
  //setState(prison);
  const {  names,location,password,email,username,phone  } = state;

  return (
    <div>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={prisonMessage}
        error={configMenuErrors && configMenuErrors.statusText}
        title={"Add Prison"}
      />
      <Grid className="form-card">
        <Grid item md={4} sm={8} xs={3} style={{ margin: "auto", minWidth: 1200 }}>
          <Paper className="paper">
            <h3>Add New PRISON</h3>

            <form onSubmit={onSubmit}>
              <TextInput
                name="names"
                value={names}
                label="Prison Names"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                required
              />

              <TextInput
                name="location"
                required
                value={location}
                label="Location"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="username"
                required
                value={username}
                label="Username"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="phone"
                required
                value={phone}
                label="phone"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />

<TextInput
                name="email"
                required
                value={email}
                label="Email"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              />
               <TextInput
                name="password"
                required
                value={password}
                label="Password"
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

export default UpdatePrison;
