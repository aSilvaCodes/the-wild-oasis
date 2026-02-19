import { useSearchParams } from "react-router-dom";
import Select from "../ui/Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortBy = searchParams.get("sortBy") || "maxCapacity";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={currentSortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
