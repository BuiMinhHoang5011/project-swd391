import React, { component } from "react";
import { getDataByPathTest } from "../../../service/data";
function Semester() {
  const [semesters, setSemester] = useState(null);
  useEffect(() => {
    loadDataSemester();
  }, []);

  async function loadDataSemester() {
    const path = `api/v1/semesters`;
    const res = await getDataByPathTest(path, "", "");
    console.log(res);
    if (res !== null && res !== undefined && res.status === 200) {
      setBusiness(res.data);
    }
  }
  return <></>;
}
