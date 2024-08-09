import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./PermissionsList.module.css";

const PermissionsList = (prop) => {
  const { groupname, role, initialValue, onTransferPermissions } = prop;
  const [permissionsChecked, setPermissionsChecked] = useState(initialValue);

  const viewChangedHandler = (event) => {
    const isChecked = event.target.checked;
    let updatedPermissions = [];
    if (isChecked) {
      updatedPermissions = [
        { ...permissionsChecked[0], checked: isChecked },
        { ...permissionsChecked[1] },
        { ...permissionsChecked[2] },
        { ...permissionsChecked[3] },
      ];
    } else {
      updatedPermissions = permissionsChecked.map((p) => {
        return {
          ...p,
          checked: false,
        };
      });
    }
    setPermissionsChecked(updatedPermissions);
    onTransferPermissions(updatedPermissions, groupname);
  };

  const createChangedHandler = (event) => {
    const isChecked = event.target.checked;
    let updatedPermissions = [];
    if (isChecked) {
      updatedPermissions = [
        { ...permissionsChecked[0], checked: isChecked },
        { ...permissionsChecked[1], checked: isChecked },
        { ...permissionsChecked[2] },
        { ...permissionsChecked[3] },
      ];
    } else {
      updatedPermissions = [
        { ...permissionsChecked[0] },
        { ...permissionsChecked[1], checked: isChecked },
        { ...permissionsChecked[2] },
        { ...permissionsChecked[3] },
      ];
    }
    setPermissionsChecked(updatedPermissions);
    onTransferPermissions(updatedPermissions, groupname);
  };

  const deleteChangedHandler = (event) => {
    const isChecked = event.target.checked;
    let updatedPermissions = [];
    if (isChecked) {
      updatedPermissions = [
        { ...permissionsChecked[0], checked: isChecked },
        { ...permissionsChecked[1] },
        { ...permissionsChecked[2], checked: isChecked },
        { ...permissionsChecked[3] },
      ];
    } else {
      updatedPermissions = [
        { ...permissionsChecked[0] },
        { ...permissionsChecked[1] },
        { ...permissionsChecked[2], checked: isChecked },
        { ...permissionsChecked[3], checked: isChecked },
      ];
    }
    setPermissionsChecked(updatedPermissions);
    onTransferPermissions(updatedPermissions, groupname);
  };

  const editChangedHandler = (event) => {
    const isChecked = event.target.checked;
    let updatedPermissions = [];
    if (isChecked) {
      updatedPermissions = permissionsChecked.map((p) => {
        return {
          ...p,
          checked: true,
        };
      });
    } else {
      updatedPermissions = [
        { ...permissionsChecked[0] },
        { ...permissionsChecked[1] },
        { ...permissionsChecked[2] },
        { ...permissionsChecked[3], checked: isChecked },
      ];
    }
    setPermissionsChecked(updatedPermissions);
    onTransferPermissions(updatedPermissions, groupname);
  };
  return (
    <div className={styles.checkPermissions}>
      <span className={styles.titlePermission}>{groupname} Permissions:</span>
      <FormControlLabel
        label="View"
        control={
          <Checkbox
            name="movies"
            color="default"
            disabled={role === "Admin"}
            checked={permissionsChecked[0].checked}
            onChange={viewChangedHandler}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "gray",
              },
            }}
          />
        }
        sx={{
          color: "#b4b2b2",
          "& .MuiFormControlLabel-label.Mui-disabled": {
            color: "#b4b2b2",
          },
        }}
      />
      <FormControlLabel
        label="Create"
        control={
          <Checkbox
            name="movies"
            color="default"
            disabled={role === "Admin"}
            checked={permissionsChecked[1].checked}
            onChange={createChangedHandler}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "gray",
              },
            }}
          />
        }
        sx={{
          color: "#b4b2b2",
          "& .MuiFormControlLabel-label.Mui-disabled": {
            color: "#b4b2b2",
          },
        }}
      />
      <FormControlLabel
        label="Delete"
        control={
          <Checkbox
            name="movies"
            color="default"
            disabled={role === "Admin"}
            checked={permissionsChecked[2].checked}
            onChange={deleteChangedHandler}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "gray",
              },
            }}
          />
        }
        sx={{
          color: "#b4b2b2",
          "& .MuiFormControlLabel-label.Mui-disabled": {
            color: "#b4b2b2",
          },
        }}
      />
      <FormControlLabel
        label="Edit"
        control={
          <Checkbox
            name="movies"
            color="default"
            disabled={role === "Admin"}
            checked={permissionsChecked[3].checked}
            onChange={editChangedHandler}
            sx={{
              color: "gray",
              "&.Mui-checked": {
                color: "gray",
              },
            }}
          />
        }
        sx={{
          color: "#b4b2b2",
          "& .MuiFormControlLabel-label.Mui-disabled": {
            color: "#b4b2b2",
          },
        }}
      />
    </div>
  );
};

export default PermissionsList;
