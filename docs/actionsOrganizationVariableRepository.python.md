# `actionsOrganizationVariableRepository` Submodule <a name="`actionsOrganizationVariableRepository` Submodule" id="@cdktn/provider-github.actionsOrganizationVariableRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationVariableRepository <a name="ActionsOrganizationVariableRepository" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository github_actions_organization_variable_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer"></a>

```python
from cdktn_provider_github import actions_organization_variable_repository

actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_id: typing.Union[int, float],
  variable_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.repositoryId">repository_id</a></code> | <code>typing.Union[int, float]</code> | The repository ID that can access the organization variable. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.variableName">variable_name</a></code> | <code>str</code> | Name of the existing variable. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#id ActionsOrganizationVariableRepository#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.repositoryId"></a>

- *Type:* typing.Union[int, float]

The repository ID that can access the organization variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#repository_id ActionsOrganizationVariableRepository#repository_id}

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.variableName"></a>

- *Type:* str

Name of the existing variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#variable_name ActionsOrganizationVariableRepository#variable_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#id ActionsOrganizationVariableRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ActionsOrganizationVariableRepository resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isConstruct"></a>

```python
from cdktn_provider_github import actions_organization_variable_repository

actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isTerraformElement"></a>

```python
from cdktn_provider_github import actions_organization_variable_repository

actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isTerraformResource"></a>

```python
from cdktn_provider_github import actions_organization_variable_repository

actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generateConfigForImport"></a>

```python
from cdktn_provider_github import actions_organization_variable_repository

actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ActionsOrganizationVariableRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ActionsOrganizationVariableRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ActionsOrganizationVariableRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationVariableRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.repositoryIdInput">repository_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.repositoryId">repository_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.repositoryIdInput"></a>

```python
repository_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.repositoryId"></a>

```python
repository_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationVariableRepositoryConfig <a name="ActionsOrganizationVariableRepositoryConfig" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.Initializer"></a>

```python
from cdktn_provider_github import actions_organization_variable_repository

actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_id: typing.Union[int, float],
  variable_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.repositoryId">repository_id</a></code> | <code>typing.Union[int, float]</code> | The repository ID that can access the organization variable. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.variableName">variable_name</a></code> | <code>str</code> | Name of the existing variable. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#id ActionsOrganizationVariableRepository#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.repositoryId"></a>

```python
repository_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The repository ID that can access the organization variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#repository_id ActionsOrganizationVariableRepository#repository_id}

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Name of the existing variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#variable_name ActionsOrganizationVariableRepository#variable_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationVariableRepository.ActionsOrganizationVariableRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_variable_repository#id ActionsOrganizationVariableRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



