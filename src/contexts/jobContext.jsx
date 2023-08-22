import { createContext, useState } from "react";
import featuredJobsData from "../data/data";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const JobContext = createContext(null);

export const JobContextProvider = (props) => {
  const [jobsData, setJobsData] = useState(featuredJobsData);
  const [appliedJob, setApliedJob] = useState([]);

  const applyNow = (detail) => {
    const exsist = appliedJob.find((x) => {
      return x.id === detail.id;
    });

    if (exsist) {
      toast.warn("Job is already applied", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setApliedJob([...appliedJob, { ...detail }]);
      toast.success("Job applied succesfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const contextValue = {
    jobsData,
    setJobsData,
    applyNow,
    appliedJob,
    setApliedJob,
  };
  return (
    <JobContext.Provider value={contextValue}>
      {props.children}
    </JobContext.Provider>
  );
};
