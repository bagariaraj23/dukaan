import {
  Autocomplete,
  Box,
  IconButton,
  InputBase,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import SearchIcon from "@mui/icons-material/Search";
import Download from "../../svg/Download";
import Sort from "../../svg/Sort";

const CustomArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
      fill="#4D4D4D"
    />
  </svg>
);

const timeFrame = ["First Month", "Last Month"];

const Dashboard = () => {

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      flex: 1,
      cellClassName: "customClass",
      valueFormatter: (params) => `#${params.value}`,
    },
    {
      field: "orderDate",
      headerName: "Order date",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "orderAmount",
      headerName: "Order amount",
      flex: 1,
      valueFormatter: (params) => `₹${params.value}`,
    },
    {
      field: "txnFee",
      headerName: "Transaction fees",
      flex: 1,
    },
  ];

  return (
    <Box sx={{ padding: "32px", height: "92%", overflow: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "24px",
        }}
      >
        <Typography variant="h6">Overview</Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={timeFrame}
          sx={{ width: 170 }}
          IconComponent={CustomArrowIcon}
          defaultValue="Last Month"
          renderInput={(params) => (
            <TextField {...params} defaultValue="Last Month" />
          )}
        />
      </Box>
      <Stack gap={2}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 6"
            backgroundColor="#fff"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              boxShadow: "0 2px 6px 0 rgba(26, 24, 30, 0.04)",
              borderRadius: "8px",
            }}
          >
            <Box width="100%" m="0 30px">
              <Stack gap={2}>
                <Typography variant="h6">Online orders</Typography>
                <Typography variant="h4">231</Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            gridColumn="span 6"
            backgroundColor="#fff"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              boxShadow: "0 2px 6px 0 rgba(26, 24, 30, 0.04)",
              borderRadius: "8px",
            }}
          >
            <Box width="100%" m="0 30px">
              <Stack gap={2}>
                <Typography variant="h6">Amount received</Typography>
                <Typography variant="h4">₹23,92,312.19</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Typography>Transactions | This Month</Typography>

        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "1rem",
            boxShadow: "0 2px 6px 0 rgba(26, 24, 30, 0.04)",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box
                sx={{
                  width: "20vw",
                  borderRadius: "6px",
                  display: "flex",
                  border: "1px solid #f2f2f2",
                }}
              >
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <InputBase placeholder="Search by order ID..." />
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  border: "1px solid #f2f2f2",
                  borderRadius: "6px",
                  color: "#4d4d4d",
                }}
              >
                <Typography sx={{ marginRight: "4px" }}>Sort</Typography>
                <Sort />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #f2f2f2",
                  borderRadius: "6px",
                  color: "#4d4d4d",
                }}
              >
                <Download />
              </Box>
            </Box>
          </Box>
          <Box
            m="12px 0 0 0"
            height="auto"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f2f2f2",
                borderBottom: "none",
              },
              "& .customClass": {
                color: "#146EB4",
              },
            }}
          >
            <DataGrid
              rows={mockDataTeam}
              columns={columns}
              pageSize={19}
              autoHeight={true}
              pagination
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;
