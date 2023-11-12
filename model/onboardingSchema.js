const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema({
    hear: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    website: { type: String, required: true },
    goal: [{ type: String }],
    interestedTechStack: [{ type: String }],
    meetingId: { type: String },
});

const Onboarding = mongoose.model("ONBOARDING", onboardingSchema);

module.exports = Onboarding;