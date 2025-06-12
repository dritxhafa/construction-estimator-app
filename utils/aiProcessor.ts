import { EstimateData, ProjectInfo, LineItem } from '../types';

// Simulated AI processing for PDF analysis
export const processPDF = async (file: File): Promise<EstimateData> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Mock data that simulates AI extraction from blueprint
  const projectInfo: ProjectInfo = {
    total_area: 2400,
    floors: 2,
    rooms: [
      { name: 'Living Room', area: 350, perimeter: 75, height: 9 },
      { name: 'Kitchen', area: 200, perimeter: 60, height: 9 },
      { name: 'Master Bedroom', area: 300, perimeter: 70, height: 9 },
      { name: 'Bedroom 2', area: 180, perimeter: 55, height: 9 },
      { name: 'Bedroom 3', area: 160, perimeter: 52, height: 9 },
      { name: 'Bathroom 1', area: 85, perimeter: 38, height: 9 },
      { name: 'Bathroom 2', area: 65, perimeter: 34, height: 9 },
    ],
    materials_detected: ['Wood Frame', 'Drywall', 'Tile', 'Hardwood', 'Paint', 'Insulation']
  };

  const lineItems: LineItem[] = [
    {
      id: '1',
      category: 'Framing',
      description: 'Wood frame construction, 2x6 studs 16" O.C.',
      quantity: 2400,
      unit: 'SF',
      unit_cost: 8.50,
      total_cost: 20400,
      trade: 'Carpentry'
    },
    {
      id: '2',
      category: 'Insulation',
      description: 'R-21 batt insulation in walls',
      quantity: 1800,
      unit: 'SF',
      unit_cost: 1.85,
      total_cost: 3330,
      trade: 'Insulation'
    },
    {
      id: '3',
      category: 'Drywall',
      description: '1/2" drywall on walls and ceilings',
      quantity: 4800,
      unit: 'SF',
      unit_cost: 2.25,
      total_cost: 10800,
      trade: 'Drywall'
    },
    {
      id: '4',
      category: 'Paint',
      description: 'Interior paint, 2 coats primer and finish',
      quantity: 4800,
      unit: 'SF',
      unit_cost: 1.75,
      total_cost: 8400,
      trade: 'Painting'
    },
    {
      id: '5',
      category: 'Flooring',
      description: 'Hardwood flooring, red oak 3/4"',
      quantity: 1500,
      unit: 'SF',
      unit_cost: 12.50,
      total_cost: 18750,
      trade: 'Flooring'
    },
    {
      id: '6',
      category: 'Tile',
      description: 'Ceramic tile flooring in bathrooms',
      quantity: 150,
      unit: 'SF',
      unit_cost: 8.75,
      total_cost: 1313,
      trade: 'Tile'
    },
    {
      id: '7',
      category: 'Doors',
      description: 'Interior solid wood doors with hardware',
      quantity: 12,
      unit: 'EA',
      unit_cost: 285,
      total_cost: 3420,
      trade: 'Carpentry'
    },
    {
      id: '8',
      category: 'Windows',
      description: 'Double-hung vinyl windows',
      quantity: 18,
      unit: 'EA',
      unit_cost: 450,
      total_cost: 8100,
      trade: 'Windows'
    }
  ];

  const totalCost = lineItems.reduce((sum, item) => sum + item.total_cost, 0);
  const laborCost = totalCost * 0.65; // 65% labor
  const materialCost = totalCost * 0.30; // 30% materials
  const equipmentCost = totalCost * 0.05; // 5% equipment

  return {
    total_cost: totalCost,
    labor_cost: laborCost,
    material_cost: materialCost,
    equipment_cost: equipmentCost,
    line_items: lineItems,
    project_info: projectInfo
  };
};

// Simulated AI chatbot responses
export const getChatResponse = async (message: string, estimateData: EstimateData): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('total') || lowerMessage.includes('cost')) {
    return `The total estimated cost for this project is $${estimateData.total_cost.toLocaleString()}. This breaks down to $${estimateData.labor_cost.toLocaleString()} in labor, $${estimateData.material_cost.toLocaleString()} in materials, and $${estimateData.equipment_cost.toLocaleString()} in equipment costs.`;
  }
  
  if (lowerMessage.includes('framing')) {
    const framingItem = estimateData.line_items.find(item => item.category === 'Framing');
    return framingItem ? `Framing costs are estimated at $${framingItem.total_cost.toLocaleString()} for ${framingItem.quantity} square feet of ${framingItem.description}.` : 'No framing costs found in this estimate.';
  }
  
  if (lowerMessage.includes('room') || lowerMessage.includes('breakdown')) {
    const rooms = estimateData.project_info.rooms;
    const roomBreakdown = rooms.map(room => `${room.name}: ${room.area} sq ft`).join(', ');
    return `Here's the room breakdown: ${roomBreakdown}. The total project area is ${estimateData.project_info.total_area} square feet across ${estimateData.project_info.floors} floors.`;
  }
  
  if (lowerMessage.includes('labor')) {
    return `Labor costs are estimated at $${estimateData.labor_cost.toLocaleString()}, which represents about 65% of the total project cost. This includes all trades: carpentry, drywall, painting, flooring, and other specialized work.`;
  }
  
  if (lowerMessage.includes('material')) {
    return `Material costs are estimated at $${estimateData.material_cost.toLocaleString()}, representing about 30% of the total project cost. This covers all lumber, drywall, paint, flooring, fixtures, and other building materials.`;
  }

  if (lowerMessage.includes('expensive') || lowerMessage.includes('highest')) {
    const sortedItems = [...estimateData.line_items].sort((a, b) => b.total_cost - a.total_cost);
    const topThree = sortedItems.slice(0, 3);
    return `The most expensive line items are: 1) ${topThree[0].description} at $${topThree[0].total_cost.toLocaleString()}, 2) ${topThree[1].description} at $${topThree[1].total_cost.toLocaleString()}, and 3) ${topThree[2].description} at $${topThree[2].total_cost.toLocaleString()}.`;
  }
  
  return `I can help you understand your construction estimate. Try asking about total costs, specific trades like framing or flooring, room breakdowns, or labor vs material costs. What would you like to know more about?`;
};