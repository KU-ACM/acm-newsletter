export const uploadImage = async (file: File): Promise<string> => {
  let fileBase64: string = (await convertBase64(file)) as string;
  fileBase64 = fileBase64.split(",")[1];
  console.log(fileBase64);

  const formData = new FormData();
  formData.append("image", fileBase64);

  const response = await fetch(
    "https://api.imgbb.com/1/upload?key=90b16de56e670d09051a7d49cb74d5e9",
    {
      method: "POST",
      body: formData,
    }
  );
  const json = await response.json();
  return json.data.display_url;
};

const convertBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
