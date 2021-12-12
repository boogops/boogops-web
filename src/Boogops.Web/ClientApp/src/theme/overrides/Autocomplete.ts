const Autocomplete = (theme: any) => ({
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: theme.customShadows.z20,
      },
    },
  },
});

export default Autocomplete;
