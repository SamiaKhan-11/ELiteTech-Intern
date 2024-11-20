const DashboardCard = ({ title, value, change, bgColor }) => (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
        {change}
      </p>
    </div>
  );
  
  export default DashboardCard;
  