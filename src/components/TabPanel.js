import Box from '@material-ui/core/Box';

const TabPanel = ({ children, value, index }) => {
    return (
        <div className="border border-top-0"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel;