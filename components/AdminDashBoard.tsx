
"use client";
import React, { useState } from "react";
import NewMemberForm from "./NewMemberForm";
import EditMemberForm from "./EditMemberForm";

const AdminDashboard = ({ navigateToLanding }) => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Member-1",
      email: "member1@gmail.com",
      mobile: "1234567890",
      address: "Address 1",
      planDetail: "Cardio",
      duration: "6 months",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
      gender: "Male",
      image: null,
    },
    {
      id: 2,
      name: "Member-2",
      email: "member2@gmail.com",
      mobile: "0987654321",
      address: "Address 2",
      planDetail: "Yoga",
      duration: "3 months",
      startDate: "2024-02-01",
      endDate: "2024-04-30",
      gender: "Female",
      image: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showNewMemberForm, setShowNewMemberForm] = useState(false);
  const [showEditMemberForm, setShowEditMemberForm] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const adminEmail = "admin@gmail.com";

  const handleNewMemberClick = () => setShowNewMemberForm(true);
  const handleEditClick = (member) => {
    setSelectedMember(member);
    setShowEditMemberForm(true);
  };

  const handleSaveNewMember = (newMember) => {
    if (
      members.some(
        (member) => member.email === newMember.email || member.mobile === newMember.mobile
      )
    ) {
      alert("Member with this email or mobile already exists!");
      return;
    }
    setMembers([...members, { ...newMember, id: members.length + 1 }]);
    setShowNewMemberForm(false);
  };

  const handleSaveEditedMember = (updatedMember) => {
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setShowEditMemberForm(false);
  };

  const handleDeleteMember = (memberId) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((member) => member.id !== memberId));
    }
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showNewMemberForm) {
    return (
      <NewMemberForm
        goBack={() => setShowNewMemberForm(false)}
        onSave={handleSaveNewMember}
        adminEmail={adminEmail}
        setMembers={setMembers} 
      />
    );
  }

  if (showEditMemberForm && selectedMember) {
    return (
      <EditMemberForm
        member={selectedMember}
        goBack={() => setShowEditMemberForm(false)}
        onSave={handleSaveEditedMember}
      />
    );
  }

  return (
    <div>
      <header className="flex justify-between items-center bg-[#3a3f51] text-white p-5">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <span>{adminEmail}</span>
          <button
            onClick={navigateToLanding}
            className="bg-[#ff4b5c] text-white py-2 px-4 rounded-md font-bold hover:bg-[#e84150]"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="p-5 bg-white rounded-lg shadow-lg mx-auto mt-5 max-w-screen-lg">
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Members</h2>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search members by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-3 border border-[#ddd] rounded-md text-lg"
            />
            <button
              onClick={handleNewMemberClick}
              className="bg-[#28a745] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#218838]"
            >
              Add New Member
            </button>
          </div>
          <table className="w-full table-auto border-collapse">
            <thead className="bg-[#3a3f51] text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-[#f2f2f2]">
                    <td className="p-3">{member.name} ({member.planDetail})</td>
                    <td className="p-3">{member.email}</td>
                    <td className="p-3">{member.planDetail}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleEditClick(member)}
                        className="bg-[#007bff] text-white py-2 px-4 rounded-md mr-2 hover:bg-[#0056b3]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="bg-[#ff4b5c] text-white py-2 px-4 rounded-md hover:bg-[#e84150]"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-3">
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <button onClick={navigateToLanding}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
