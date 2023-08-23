import axios from "axios";

export const postCategorories = async () => {
  let res = await axios.get(process.env.BASE_URL + "/post-categories");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

export async function postList(id) {
  let res = await axios.get(process.env.BASE_URL + "/post-list/2");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function postNewest() {
  let res = await axios.get(process.env.BASE_URL + "/post-newest");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function details(id) {
  let res = await axios.get(process.env.BASE_URL + "/post-details/" + id);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
