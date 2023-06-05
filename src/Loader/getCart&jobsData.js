import { getStoredCart } from "../utilities/fakedb";

export const jobsAndCartData = async () => {
  const jobsData = await fetch("/featuredJob.json");
  const jobs = await jobsData.json();
  const savedCart = getStoredCart();
  let cartArray = [];
  for (const id in savedCart) {
    const foundJobs = jobs.find((jobs) => jobs.id === id);
    if (foundJobs) {
      foundJobs.quantity = savedCart[id];
      // cartD.push(foundJobs)
      // setCart(...cart, foundJobs)
      cartArray.push(foundJobs);
    }
  }
  return {cartArray, jobs}
};
