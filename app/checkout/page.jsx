"use client";

import { useEffect, useState } from "react";


export default function CheckoutPage() {
  // addresses list
  const [addresses, setAddresses] = useState([]);

  // UI states
  const [showForm, setShowForm] = useState(false); // whether to show add-new form
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  // form state
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
  });

  // load addresses on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("checkout_addresses");
      const list = raw ? JSON.parse(raw) : [];
      setAddresses(list);
      // load previously selected address
      const sel = localStorage.getItem("checkout_selected");
      if (sel) setSelectedAddressId(sel);
    } catch (e) {
      setAddresses([]);
    }
  }, []);

  // helper: persist addresses
  const persistAddresses = (list) => {
    localStorage.setItem("checkout_addresses", JSON.stringify(list));
    setAddresses(list);
  };

  // handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  // basic validation
  const validateForm = () => {
    const required = ["email","firstName","lastName","phone","address","city","state","zip"];
    for (const key of required) {
      if (!form[key] || form[key].toString().trim() === "") {
        return { ok: false, field: key };
      }
    }
    return { ok: true };
  };

  // add new address
  const handleSaveAddress = () => {
    const v = validateForm();
    if (!v.ok) {
      alert(`Please fill the ${v.field} field.`);
      return;
    }

    // create address object
    const newAddress = {
      id: Date.now().toString(),
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      fullName: `${form.firstName} ${form.lastName}`,
      phone: form.phone,
      address: form.address,
      apt: form.apt,
      city: form.city,
      state: form.state,
      zip: form.zip,
    };

    const updated = [...addresses, newAddress];
    persistAddresses(updated);
    // select the newly added address
    setSelectedAddressId(newAddress.id);
    localStorage.setItem("checkout_selected", newAddress.id);
    // hide form
    setShowForm(false);
    // clear form
    setForm({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  // use selected address and go to payment
  const handleUseAddress = () => {
    if (!selectedAddressId) {
      alert("Please select an address or add a new one.");
      return;
    }
    // persist selected address id
    localStorage.setItem("checkout_selected", selectedAddressId);
    // navigate to payment
    window.location.href = "/order-confirmation";
  };

  // remove address (optional small feature)
  const handleDeleteAddress = (id) => {
    if (!confirm("Delete this address?")) return;
    const updated = addresses.filter((a) => a.id !== id);
    persistAddresses(updated);
    if (selectedAddressId === id) {
      setSelectedAddressId(null);
      localStorage.removeItem("checkout_selected");
    }
  };

  return (
    <div className="mx-5 md:mx-20 lg:mx-40 mt-[125px] pb-20">
      <h1 className="text-[24px] md:text-[28px] font-bold text-[#121417]">Checkout</h1>

      {/* If there are saved addresses and form is not open, show saved-address view */}
      {addresses.length > 0 && !showForm ? (
        <div className="mt-6">
          <h2 className="text-[18px] font-semibold mb-4">Saved addresses</h2>

          <div className="flex flex-col gap-4">
            {addresses.map((a) => (
              <label
                key={a.id}
                className={`p-4 border rounded-lg flex justify-between items-start ${
                  selectedAddressId === a.id ? "border-black bg-white" : "bg-white border-[#E5E8EB]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="radio"
                    name="selectedAddress"
                    checked={selectedAddressId === a.id}
                    onChange={() => {
                      setSelectedAddressId(a.id);
                      localStorage.setItem("checkout_selected", a.id);
                    }}
                    className="mt-1"
                  />
                  <div>
                    <div className="text-[15px] font-semibold text-[#121417]">{a.fullName}</div>
                    <div className="text-[14px] text-[#61758A] mt-1">
                      {a.address}{a.apt ? `, ${a.apt}` : ""} , {a.city}, {a.state} - {a.zip}
                    </div>
                    <div className="text-[14px] text-[#61758A] mt-1">Phone: {a.phone}</div>
                  </div>
                </div>

                {/* small actions */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // quick use this address
                      setSelectedAddressId(a.id);
                      localStorage.setItem("checkout_selected", a.id);
                      handleUseAddress();
                    }}
                    className="text-[14px] bg-[#2B8CED] text-white px-3 py-2 rounded-md"
                  >
                    Deliver Here
                  </button>

                  <div className="text-[13px] text-[#61758A]">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        // Fill form with this address for editing
                        setForm({
                          email: a.email || "",
                          firstName: a.firstName || "",
                          lastName: a.lastName || "",
                          phone: a.phone || "",
                          address: a.address || "",
                          apt: a.apt || "",
                          city: a.city || "",
                          state: a.state || "",
                          zip: a.zip || "",
                        });
                        // remove the old one (we will replace when saving)
                        const filtered = addresses.filter((x) => x.id !== a.id);
                        persistAddresses(filtered);
                        setShowForm(true);
                      }}
                      className="mr-3 underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteAddress(a.id);
                      }}
                      className="underline text-red-600 ml-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 border rounded-lg text-[14px]"
            >
              + Add New Address
            </button>

            
          </div>
        </div>
      ) : (
        // Show form when no addresses or when user clicks Add New
        <div className="mt-6 max-w-2xl">
          <h2 className="text-[18px] font-semibold mb-4">{showForm ? "Add new address" : "No saved addresses"}</h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium">Email</label>
              <input name="email" value={form.email} onChange={handleChange}
                className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-1/2">
                <label className="text-[14px] font-medium">First name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange}
                  className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
              </div>

              <div className="flex flex-col gap-2 w-1/2">
                <label className="text-[14px] font-medium">Last name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange}
                  className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange}
                className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium">Address</label>
              <input name="address" value={form.address} onChange={handleChange}
                className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium">Apt, suite, etc. (optional)</label>
              <input name="apt" value={form.apt} onChange={handleChange}
                className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-1/2">
                <label className="text-[14px] font-medium">City</label>
                <input name="city" value={form.city} onChange={handleChange}
                  className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label className="text-[14px] font-medium">State</label>
                <input name="state" value={form.state} onChange={handleChange}
                  className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-1/2">
                <label className="text-[14px] font-medium">Zip Code</label>
                <input name="zip" value={form.zip} onChange={handleChange}
                  className="h-12 w-full p-4 rounded-lg border border-[#DBE0E5] outline-0" />
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSaveAddress}
                className="px-5 py-2 bg-[#2B8CED] text-white rounded-lg"
              >
                Save Address
              </button>

              <button
                onClick={() => {
                  setShowForm(false);
                  // if we had prefilled form from editing and want to cancel, reload saved addresses
                  const raw = localStorage.getItem("checkout_addresses");
                  setAddresses(raw ? JSON.parse(raw) : []);
                }}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}
