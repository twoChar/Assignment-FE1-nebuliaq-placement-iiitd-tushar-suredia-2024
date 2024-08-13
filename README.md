Demo Video:
https://drive.google.com/file/d/1EKZXIWxoYmGopvr1r6MAdBK2abJZ5j-Y/view?usp=drive_link




<img width="932" alt="image" src="https://github.com/user-attachments/assets/09ae822d-5817-4381-9cef-4b4ae8d0ccab">

Frontend Developer Assignment - 1: Fat Table Implementation
Overview
This project involves the development of a dynamic web table that displays service metrics in a consolidated "fat row" format. Each service's metrics are presented in two sub-rows representing the client and server sides, making it easier to compare the performance of each service.

Features
Filtering: Users can filter the table by service name or by the side (client/server) to quickly locate relevant data.
Sorting: The table supports sorting based on any provided metric (e.g., requests, rate, p75, p90, p99, error) on the client or server sides.
Responsive Design: The table layout is fully responsive, ensuring optimal viewing and interaction across different devices.
Performance: The implementation is optimized for performance, allowing smooth operation even with a large dataset.
Components
ServiceMetricsTable: Handles the rendering of the service metrics table with filtering and sorting functionalities.
FilterSortControls: Provides input controls for filtering by service name or side and sorting by metrics.
TableRow: Manages the rendering of individual rows within the table, grouping client and server metrics under the appropriate service.
Setup
To run the project locally, follow these steps:

Clone the repository.
Install dependencies using npm install.
Start the development server using npm start.
Open your browser and navigate to http://localhost:3000.
