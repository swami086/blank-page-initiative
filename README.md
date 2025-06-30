# N8N Workflow Builder - Enhanced Repo Sync Tool

This project integrates the [MCP N8N Workflow Builder](https://github.com/salacoste/mcp-n8n-workflow-builder) with Windsurf IDE, allowing you to create and manage N8N workflows using natural language through the Model Context Protocol (MCP).

## 🚀 Quick Start

### 1. Setup
```bash
npm install
npm run setup
```

### 2. Configure Environment
1. Copy `.env.example` to `.env`
2. Update with your N8N credentials:
   ```env
   N8N_HOST=https://your-n8n-instance.com/api/v1/
   N8N_API_KEY=your_api_key_here
   ```

### 3. Test Connection
```bash
npm run test-mcp
```

### 4. Configure Windsurf
1. Open Windsurf Settings → MCP Servers
2. Add the configuration from `windsurf-mcp-config.json`
3. Replace `${N8N_API_KEY}` with your actual API key
4. Restart Windsurf

## 🛠️ Available MCP Tools

### Workflow Management
- `list_workflows` - List all workflows
- `create_workflow` - Create new workflows
- `get_workflow` - Get workflow details
- `update_workflow` - Update existing workflows
- `delete_workflow` - Delete workflows
- `activate_workflow` - Activate workflows
- `deactivate_workflow` - Deactivate workflows
- `execute_workflow` - Execute workflows manually

### Execution Management
- `list_executions` - List workflow executions
- `get_execution` - Get execution details
- `delete_execution` - Delete execution records

### Tag Management
- `create_tag` - Create tags
- `get_tags` - List all tags
- `get_tag` - Get tag details
- `update_tag` - Update tags
- `delete_tag` - Delete tags

## 💡 Usage Examples

Once configured in Windsurf, you can use natural language to:

```
"Create a workflow that monitors GitHub issues and sends Slack notifications"
"List all my active workflows"
"Show me the execution history for the GitHub sync workflow"
"Activate the workflow with ID 123"
"Create a tag called 'automation' for organizing workflows"
```

## 🔧 Configuration

### Windsurf MCP Configuration
The `windsurf-mcp-config.json` file contains the MCP server configuration for Windsurf:

```json
{
  "mcpServers": {
    "n8n-workflow-builder": {
      "command": "n8n-workflow-builder",
      "args": [],
      "env": {
        "N8N_HOST": "https://your-n8n-instance.com/api/v1/",
        "N8N_API_KEY": "your_api_key_here",
        "MCP_PORT": "58921"
      },
      "disabled": false,
      "alwaysAllow": ["list_workflows", "get_workflow", ...],
      "autoApprove": ["create_workflow", "update_workflow", ...]
    }
  }
}
```

### Environment Variables
- `N8N_HOST` - Your N8N instance API URL
- `N8N_API_KEY` - Your N8N API key
- `MCP_PORT` - Port for MCP server (optional, defaults to 58921)

## 📋 Important Notes

### Workflow Triggers
- N8N requires at least one trigger node to activate workflows
- Valid triggers: `scheduleTrigger`, `webhook`, service-specific triggers
- The `manualTrigger` is NOT recognized by the N8N API
- The MCP server automatically adds `scheduleTrigger` when needed

### Permissions
- `alwaysAllow` - Tools that don't require approval
- `autoApprove` - Tools that auto-approve but may show notifications
- Be careful with destructive operations like `delete_workflow`

## 🧪 Testing

### Test MCP Connection
```bash
npm run test-mcp
```

### Manual MCP Server Start
```bash
# Standard mode
npm run start-mcp

# JSON-RPC mode (for testing)
npm run start-mcp-rpc
```

## 🔍 Troubleshooting

### Common Issues

1. **MCP Server Not Found**
   ```bash
   npm install -g @kernel.salacoste/n8n-workflow-builder
   ```

2. **Authentication Errors**
   - Verify N8N_HOST and N8N_API_KEY in `.env`
   - Check N8N instance is accessible

3. **Port Conflicts**
   - Change MCP_PORT in `.env` and configuration
   - Use high port numbers (58921, 58922, etc.)

4. **Workflow Activation Fails**
   - Ensure workflow has valid trigger nodes
   - Check workflow JSON structure

### Debug Mode
Set `DEBUG=true` in `.env` for verbose logging.

## 📚 Resources

- [Original MCP N8N Workflow Builder](https://github.com/salacoste/mcp-n8n-workflow-builder)
- [N8N API Documentation](https://docs.n8n.io/api/)
- [Model Context Protocol](https://modelcontextprotocol.io/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - see the original [MCP N8N Workflow Builder](https://github.com/salacoste/mcp-n8n-workflow-builder) for details.
