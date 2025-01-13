export const generateBotResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Service-related responses
  if (lowerMessage.includes("appointment") || lowerMessage.includes("scheduling")) {
    return "Our AI Appointment Voice Agent can help streamline your scheduling process. It handles scheduling, rescheduling, and cancellations with natural conversational abilities, available 24/7. Would you like to learn more about its features?";
  }
  
  if (lowerMessage.includes("customer service") || lowerMessage.includes("support")) {
    return "Our Intelligent Customer Service Agent provides advanced AI-powered support across multiple channels. It understands context, handles complex queries, and delivers personalized assistance. Would you like to know more about how it can help your business?";
  }
  
  if (lowerMessage.includes("sales") || lowerMessage.includes("leads")) {
    return "Our AI Customer Acquisition Agent is designed to boost your sales performance by qualifying leads, nurturing prospects, and driving conversions through intelligent conversations. Would you like to discuss how it can help grow your business?";
  }

  // Company information
  if (lowerMessage.includes("about") || lowerMessage.includes("company")) {
    return "AipaBOT is dedicated to empowering businesses with cutting-edge AI solutions that streamline operations, reduce costs, and drive sustainable growth. We make advanced technology accessible and practical for organizations of all sizes. Would you like to know more about our specific solutions?";
  }

  // Demo request
  if (lowerMessage.includes("demo") || lowerMessage.includes("try")) {
    return "I'd be happy to help you schedule a demo! You can request a demo through our website, and our team will contact you to schedule a personalized demonstration tailored to your needs. Would you like me to guide you to the demo request form?";
  }

  // Pricing or costs
  if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
    return "Our pricing is customized based on your specific needs and business size. I'd recommend scheduling a demo where we can discuss your requirements and provide detailed pricing information. Would you like to schedule a demo?";
  }

  // Integration questions
  if (lowerMessage.includes("integrate") || lowerMessage.includes("implementation")) {
    return "Our solutions are designed to integrate seamlessly with your existing systems. We provide comprehensive support during implementation, including technical assistance, training, and ongoing maintenance. Would you like to discuss specific integration requirements?";
  }

  // Default response for unknown queries
  return "I understand you're interested in learning more about our AI solutions. Could you please specify which aspect you'd like to know more about? I can tell you about our appointment scheduling, customer service, or sales automation solutions.";
};