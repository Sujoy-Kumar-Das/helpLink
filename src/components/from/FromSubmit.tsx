import { LoadingButton } from "@mui/lab";

export default function FromSubmit({
  text,
  loading,
}: {
  text: string;
  loading: boolean;
}) {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      fullWidth
      sx={{ mt: 2 }}
      type="submit"
      color="primary"
    >
      {text}
    </LoadingButton>
  );
}
