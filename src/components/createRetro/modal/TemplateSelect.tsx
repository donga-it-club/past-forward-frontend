import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { RetrospectivesTemplateResponse } from '@/api/@types/RetrospectiveTemplates';
import getTemplate from '@/api/retrospectivesApi/getTemplate';

interface TemplateSelectProps {
  onChange: (templateId: number) => void;
  defaultTemplateId: number | null;
}

const TemplateSelect: React.FC<TemplateSelectProps> = ({ onChange, defaultTemplateId }) => {
  const [templates, setTemplates] = useState<RetrospectivesTemplateResponse['data']>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await getTemplate();
        console.log('템플릿 데이터', response);
        setTemplates(response);
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <>
      <div>Template</div>
      <Select
        placeholder="Select option"
        onChange={e => onChange(Number(e.target.value))}
        defaultValue={defaultTemplateId !== null ? defaultTemplateId.toString() : '1'}
      >
        {templates.map(template => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default TemplateSelect;
