// DataTable.js
import React from 'react';
import Table from './Table';
import HeaderComponent from './HeaderComponent';
import TableNew from './TableNew';

// Sample data for construction vehicles
const data = [
    {
      id: 1,
      immatriculation: 'CN5678XPL123',
      name: 'Excavator Model A',
      status: 'Active',
      type: 'Excavator',
      brand: 'Caterpillar',
      model: 'CAT 320D',
      serialNumber: 'SN789654321',
      imei: '352099001234567', // For tracking equipment if applicable
    },
    {
      id: 2,
      immatriculation: 'BH9034TPL987',
      name: 'Bulldozer Max Pro',
      status: 'Stopped',
      type: 'Bulldozer',
      brand: 'Komatsu',
      model: 'D85EX',
      serialNumber: 'SN123456789',
      imei: '352099001234890',
    },
    {
      id: 3,
      immatriculation: 'WX1234TRU456',
      name: 'Dump Truck Heavy XL',
      status: 'Stopped',
      type: 'Dump Truck',
      brand: 'Volvo',
      model: 'A40G',
      serialNumber: 'SN654321987',
      imei: '352099001567890',
    },
    {
      id: 4,
      immatriculation: 'ZR7890YTH321',
      name: 'Concrete Mixer Z',
      status: 'Active',
      type: 'Concrete Mixer',
      brand: 'MAN',
      model: 'TGS 32.400',
      serialNumber: 'SN111213141',
      imei: '352099001234654',
    },
    {
      id: 5,
      immatriculation: 'FG6543PLN092',
      name: 'Crane Tower Pro  ',
      status: 'Active',
      type: 'Crane',
      brand: 'Liebherr',
      model: '110 EC-H',
      serialNumber: 'SN1029384756',
      imei: '352099001234567',
    },
    {
        id: 1,
        immatriculation: 'CN5678XPL123',
        name: 'Excavator Model A',
        status: 'Active',
        type: 'Excavator',
        brand: 'Caterpillar',
        model: 'CAT 320D',
        serialNumber: 'SN789654321',
        imei: '352099001234567', // For tracking equipment if applicable
      },
      {
        id: 2,
        immatriculation: 'BH9034TPL987',
        name: 'Bulldozer Max Pro',
        status: 'Stopped',
        type: 'Bulldozer',
        brand: 'Komatsu',
        model: 'D85EX',
        serialNumber: 'SN123456789',
        imei: '352099001234890',
      },
      {
        id: 3,
        immatriculation: 'WX1234TRU456',
        name: 'Dump Truck Heavy XL',
        status: 'Stopped',
        type: 'Dump Truck',
        brand: 'Volvo',
        model: 'A40G',
        serialNumber: 'SN654321987',
        imei: '352099001567890',
      },
      {
        id: 4,
        immatriculation: 'ZR7890YTH321',
        name: 'Concrete Mixer Z',
        status: 'Active',
        type: 'Concrete Mixer',
        brand: 'MAN',
        model: 'TGS 32.400',
        serialNumber: 'SN111213141',
        imei: '352099001234654',
      },
      {
        id: 5,
        immatriculation: 'FG6543PLN092',
        name: 'Crane Tower Pro  ',
        status: 'Active',
        type: 'Crane',
        brand: 'Liebherr',
        model: '110 EC-H',
        serialNumber: 'SN1029384756',
        imei: '352099001234567',
      },
      {
        id: 1,
        immatriculation: 'CN5678XPL123',
        name: 'Excavator Model A',
        status: 'Active',
        type: 'Excavator',
        brand: 'Caterpillar',
        model: 'CAT 320D',
        serialNumber: 'SN789654321',
        imei: '352099001234567', // For tracking equipment if applicable
      },
      {
        id: 2,
        immatriculation: 'BH9034TPL987',
        name: 'Bulldozer Max Pro',
        status: 'Stopped',
        type: 'Bulldozer',
        brand: 'Komatsu',
        model: 'D85EX',
        serialNumber: 'SN123456789',
        imei: '352099001234890',
      },
      {
        id: 3,
        immatriculation: 'WX1234TRU456',
        name: 'Dump Truck Heavy XL',
        status: 'Stopped',
        type: 'Dump Truck',
        brand: 'Volvo',
        model: 'A40G',
        serialNumber: 'SN654321987',
        imei: '352099001567890',
      },
      {
        id: 4,
        immatriculation: 'ZR7890YTH321',
        name: 'Concrete Mixer Z',
        status: 'Active',
        type: 'Concrete Mixer',
        brand: 'MAN',
        model: 'TGS 32.400',
        serialNumber: 'SN111213141',
        imei: '352099001234654',
      },
      {
        id: 5,
        immatriculation: 'FG6543PLN092',
        name: 'Crane Tower Pro  ',
        status: 'Active',
        type: 'Crane',
        brand: 'Liebherr',
        model: '110 EC-H',
        serialNumber: 'SN1029384756',
        imei: '352099001234567',
      },
  ];
  
const DataTable = () => {
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <HeaderComponent/>
            <Table data={data} />
      </div>
    );
  };
  
  export default DataTable;