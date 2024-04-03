import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Dispatch, SetStateAction, useState } from "react";
import { ISelectedSort } from "../lib/types/initialStates";

interface ISortingProps {
  name: string;
  options: string[];
  selectedIndex: number;
  setSelectedSort: Dispatch<SetStateAction<ISelectedSort>>;
}

const SortingElement = ({
  name,
  options,
  selectedIndex,
  setSelectedSort,
}: ISortingProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    if (name === "Kolejność") {
      setSelectedSort((state) => ({ ...state, order: index }));
    }
    if (name === "Sortowanie według") {
      setSelectedSort((state) => ({ ...state, sort: index }));
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <List
        component='nav'
        aria-label='Sorting element'
        sx={{
          p: 0,
          borderBottom: "1px solid var(--border-color)",
          width: "12rem",
        }}
      >
        <ListItemButton
          id='lock-button'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='sort'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary={name} secondary={options[selectedIndex]} />
        </ListItemButton>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options?.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortingElement;
