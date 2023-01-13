import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from "../navbar/index";
import UserWidget from 'scenes/widgets/UserWidget';

const HomePage = () => {
    const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            <Box
                display={isNonMobileScreen ? "flex" : "block"}
                justifyContent="space-between"
                width="100%"
                padding="2rem 6%"
                gap="0.5rem"
            >
                <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box 
                    flexBasis={isNonMobileScreen ? "42%" : undefined}
                    mt={isNonMobileScreen ? undefined : "2rem"}
                >
                    {/* widget */}
                </Box>
                {isNonMobileScreen && <Box flexBasis="26%"></Box>}
            </Box>

        </Box>
    );
}

export default HomePage;