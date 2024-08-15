import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
  Grid,
  Collapse,
  useMediaQuery,
  useTheme,
  Chip
} from "@mui/material";
import "./FilterPanel.css";

const FilterPanel = ({ filters, dispatch }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    const newSkills = checked
      ? [...filters.skills, value]
      : filters.skills.filter((skill) => skill !== value);
    dispatch({ type: "SET_SKILLS", payload: newSkills });
  };

  const handleExperienceChange = (e, newValue) => {
    dispatch({ type: "SET_EXPERIENCE", payload: newValue });
  };

  const handleEducationChange = (e) => {
    dispatch({ type: "SET_EDUCATION", payload: e.target.value });
  };

  const handleLocationChange = (e) => {
    dispatch({ type: "SET_LOCATION", payload: e.target.value });
  };

  const handleAvailableChange = (e) => {
    dispatch({ type: "SET_AVAILABLE", payload: e.target.checked });
  };

  const handleSkillDropdownChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "SET_SKILLS", payload: value });
  };

  const handleEducationChipDelete = () => {
    dispatch({ type: "SET_EDUCATION", payload: '' });
  };

  const handleLocationChipDelete = () => {
    dispatch({ type: "SET_LOCATION", payload: '' });
  };

  return (
    <Collapse in={true} timeout={800}>
      <Box mb={4}>
        {isSmallScreen ? (
          <FormControl fullWidth margin="normal">
            <InputLabel>Skills</InputLabel>
            <Select
              multiple
              value={filters.skills}
              onChange={handleSkillDropdownChange}
              renderValue={(selected) => selected.join(', ')}
              sx={{ transition: "background-color 0.3s ease" }}
            >
              {[
                "JavaScript",
                "React",
                "Node.js",
                "CSS",
                "Python",
                "Java",
                "Django",
                "AWS",
                "Pandas",
                "Machine Learning",
              ].map((skill) => (
                <MenuItem key={skill} value={skill}>
                  <Checkbox checked={filters.skills.includes(skill)} />
                  <Typography variant="body1">{skill}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <FormControl component="fieldset" fullWidth margin="normal">
            <Box display="flex" flexWrap="wrap" gap={2}>
              {[
                "JavaScript",
                "React",
                "Node.js",
                "CSS",
                "Python",
                "Java",
                "Django",
                "AWS",
                "Pandas",
                "Machine Learning",
              ].map((skill) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      value={skill}
                      checked={filters.skills.includes(skill)}
                      onChange={handleSkillChange}
                      aria-label={`Filter by ${skill}`}
                    />
                  }
                  label={skill}
                  key={skill}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                />
              ))}
            </Box>
          </FormControl>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <FormControl component="fieldset" margin="normal">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.available}
                    onChange={handleAvailableChange}
                  />
                }
                label="Available"
                sx={{ transition: "color 0.3s ease" }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Box display="flex" flexDirection="row" alignItems="center" width="100%">
              <Typography variant="subtitle1" gutterBottom sx={{ marginRight: 2 }}>
                Experience (years)
              </Typography>
              <FormControl fullWidth margin="normal">
                <Slider
                  value={filters.experience}
                  onChange={handleExperienceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={20}
                  step={1}
                  aria-labelledby="experience-slider"
                  sx={{ transition: "width 0.3s ease-in-out", flexGrow: 1 }}
                />
                <Typography variant="body2" id="experience-slider">
                  {`${filters.experience[0]} - ${filters.experience[1]}`}
                </Typography>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Education</InputLabel>
              <Select
                value={filters.education}
                onChange={handleEducationChange}
                sx={{ transition: "background-color 0.3s ease" }}
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                <MenuItem value="Master's">Master's</MenuItem>
                <MenuItem value="PhD">PhD</MenuItem>
              </Select>
            </FormControl>
            {filters.education && (
              <Box mt={2}>
                <Chip
                  label={`Education: ${filters.education}`}
                  onDelete={handleEducationChipDelete}
                  color="primary"
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Location</InputLabel>
              <Select
                value={filters.location}
                onChange={handleLocationChange}
                sx={{ transition: "background-color 0.3s ease" }}
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="San Francisco">San Francisco</MenuItem>
                <MenuItem value="Chicago">Chicago</MenuItem>
                <MenuItem value="Boston">Boston</MenuItem>
              </Select>
            </FormControl>
            {filters.location && (
              <Box mt={2}>
                <Chip
                  label={`Location: ${filters.location}`}
                  onDelete={handleLocationChipDelete}
                  color="primary"
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Collapse>
  );
};

export default FilterPanel;
