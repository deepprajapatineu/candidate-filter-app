import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Grid, Fade, Box, Button, Modal } from '@mui/material';
import './CandidateList.css';

const CandidateList = ({ candidates }) => {
    const [open, setOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    const handleOpen = (candidate) => {
        setSelectedCandidate(candidate);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCandidate(null);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom align="center">
                Candidate List
            </Typography>
            {candidates.length > 0 ? (
                <Grid container spacing={2}>
                    {candidates.map(candidate => (
                        <Grid item xs={12} sm={6} md={4} key={candidate.id}>
                            <Fade in timeout={500}>
                                <Card
                                    sx={{
                                        transition: 'transform 0.8s ease, box-shadow 0.6s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(0.98)',
                                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
                                        },
                                    }}
                                    onClick={() => handleOpen(candidate)}
                                >
                                    <CardHeader
                                        title={candidate.name}
                                        subheader={`Experience: ${candidate.experience} years`}
                                        titleTypographyProps={{ variant: 'h5' }}
                                        subheaderTypographyProps={{ variant: 'subtitle1' }}
                                    />
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <Typography variant="body1" paragraph>
                                                <strong>Skills:</strong>
                                            </Typography>
                                            <Typography variant="body1" paragraph ml={1}>
                                                {candidate.skills.slice(0, 2).join(', ')}
                                                {candidate.skills.length > 2 && (
                                                    <>
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            sx={{ color: 'primary.main', cursor: 'pointer' }}
                                                            onClick={() => handleOpen(candidate)}
                                                        >
                                                            {' '}
                                                            +{candidate.skills.length - 2} more
                                                        </Typography>
                                                    </>
                                                )}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" paragraph>
                                            <strong>Education:</strong> {candidate.education}
                                        </Typography>
                                        <Typography variant="body1" paragraph>
                                            <strong>Location:</strong> {candidate.location}
                                        </Typography>
                                        <Typography variant="body1" paragraph>
                                            <strong>Available:</strong> {candidate.available ? 'Yes' : 'No'}
                                        </Typography>
                                        <Typography variant="body1" paragraph>
                                            <strong>Match Score:</strong> {candidate.matchScore !== undefined 
                                                ? `${candidate.matchScore.toFixed(2)}%` 
                                                : 'N/A'}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="body1" align="center">
                    No candidates match the selected filters.
                </Typography>
            )}

            {/* Modal for showing all skills */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        // width: 400,
                        bgcolor: 'background.paper',
                        border: '0px solid #000',
                        boxShadow: 24,
                        p: 8,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        All Skills for {selectedCandidate?.name}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {selectedCandidate?.skills.join(', ')}
                    </Typography>
                    <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
                        Close
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default CandidateList;
