export const responses: { [k: string]: number } = {};
setInterval(() => {
  for (const k of Object.keys(responses))
    delete responses[k];
}, 300_000);
export const submissionState: {
  success: boolean;
  message: string;
} = {
  success: false,
  message: "",
};
