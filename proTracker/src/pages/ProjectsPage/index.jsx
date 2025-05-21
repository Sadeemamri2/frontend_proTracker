import { useState } from 'react'
import ProjectStatusChart from '../../component/ProjectStatusChart'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    status: 'قيد التنفيذ',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newProject = {
      id: Date.now(),
      name: formData.name,
      status: formData.status,
    }
    setProjects([...projects, newProject])
    setFormData({ name: '', status: 'قيد التنفيذ' })
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">إضافة مشروع جديد</h1>
      
      <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded shadow">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="اسم المشروع"
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>قيد التنفيذ</option>
          <option>مكتمل</option>
          <option>تحت الدراسة</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          إضافة
        </button>
      </form>

      {projects.length > 0 && (
        <>
          <div className="my-8">
            <ProjectStatusChart data={projects} />
          </div>

          <h2 className="text-lg font-semibold mt-6">قائمة المشاريع</h2>
          <ul className="mt-2 space-y-2">
            {projects.map((project) => (
              <li key={project.id} className="border p-2 rounded">
                <strong>{project.name}</strong> – <em>{project.status}</em>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
