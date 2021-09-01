import { useDispatch } from "react-redux";
import { setOpen } from "../../../../../reducers/searchFormSlice";

export default function SearchControl() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setOpen());
  }
  return (
    <div
      data-id="search-expander"
      className="header-controls-pic header-controls-search"
      onClick={handleClick}
    />
  );
}
