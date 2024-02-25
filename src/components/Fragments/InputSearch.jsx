import PropTypes from "prop-types";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Input from "../Elements/Input/Input";

const InputSearch = ({ onChange }) => {
  return (
    <div className="flex flex-row">
      <div className="mx-2">
        <Input
          type="text"
          name="seacrchInput"
          placeholder="cari anime"
          onChange={onChange}
        />
      </div>
      <button className="">
        <MagnifyingGlass size={20} />
      </button>
    </div>
  );
};

InputSearch.propTypes = {
  onChange: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InputSearch;
