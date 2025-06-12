export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  name: string;
  file_name: string;
  file_url?: string;
  status: 'processing' | 'completed' | 'error';
  created_at: string;
  updated_at: string;
  estimate_data?: EstimateData;
}

export interface EstimateData {
  total_cost: number;
  labor_cost: number;
  material_cost: number;
  equipment_cost: number;
  line_items: LineItem[];
  project_info: ProjectInfo;
}

export interface LineItem {
  id: string;
  category: string;
  description: string;
  quantity: number;
  unit: string;
  unit_cost: number;
  total_cost: number;
  trade: string;
}

export interface ProjectInfo {
  total_area: number;
  floors: number;
  rooms: Room[];
  materials_detected: string[];
}

export interface Room {
  name: string;
  area: number;
  perimeter: number;
  height: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}