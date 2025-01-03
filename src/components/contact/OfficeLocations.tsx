import { Building2, Mail, Phone } from "lucide-react";

const offices = [
  {
    city: "San Francisco",
    address: "123 Tech Street, SF 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@aipabot.com",
  },
  {
    city: "New York",
    address: "456 Innovation Ave, NY 10013",
    phone: "+1 (555) 987-6543",
    email: "ny@aipabot.com",
  },
];

const OfficeLocations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {offices.map((office) => (
        <div
          key={office.city}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            {office.city}
          </h3>
          <div className="space-y-3 text-gray-600">
            <p>{office.address}</p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {office.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {office.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfficeLocations;