# `enterpriseIpAllowListEntry` Submodule <a name="`enterpriseIpAllowListEntry` Submodule" id="@cdktn/provider-github.enterpriseIpAllowListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseIpAllowListEntry <a name="EnterpriseIpAllowListEntry" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer"></a>

```python
from cdktn_provider_github import enterprise_ip_allow_list_entry

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enterprise_slug: str,
  ip: str,
  id: str = None,
  is_active: bool | IResolvable = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise to apply the IP allow list entry to. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.ip">ip</a></code> | <code>str</code> | An IP address or range of IP addresses in CIDR notation. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the entry is currently active. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.name">name</a></code> | <code>str</code> | An optional name for the IP allow list entry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.enterpriseSlug"></a>

- *Type:* str

The slug of the enterprise to apply the IP allow list entry to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.ip"></a>

- *Type:* str

An IP address or range of IP addresses in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.isActive"></a>

- *Type:* bool | cdktn.IResolvable

Whether the entry is currently active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.name"></a>

- *Type:* str

An optional name for the IP allow list entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive">reset_is_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_active` <a name="reset_is_active" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive"></a>

```python
def reset_is_active() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct"></a>

```python
from cdktn_provider_github import enterprise_ip_allow_list_entry

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement"></a>

```python
from cdktn_provider_github import enterprise_ip_allow_list_entry

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource"></a>

```python
from cdktn_provider_github import enterprise_ip_allow_list_entry

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport"></a>

```python
from cdktn_provider_github import enterprise_ip_allow_list_entry

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseIpAllowListEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseIpAllowListEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput">enterprise_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput">is_active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `enterprise_slug_input`<sup>Optional</sup> <a name="enterprise_slug_input" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput"></a>

```python
enterprise_slug_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput"></a>

```python
is_active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive"></a>

```python
is_active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseIpAllowListEntryConfig <a name="EnterpriseIpAllowListEntryConfig" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.Initializer"></a>

```python
from cdktn_provider_github import enterprise_ip_allow_list_entry

enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enterprise_slug: str,
  ip: str,
  id: str = None,
  is_active: bool | IResolvable = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug">enterprise_slug</a></code> | <code>str</code> | The slug of the enterprise to apply the IP allow list entry to. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip">ip</a></code> | <code>str</code> | An IP address or range of IP addresses in CIDR notation. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the entry is currently active. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name">name</a></code> | <code>str</code> | An optional name for the IP allow list entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enterprise_slug`<sup>Required</sup> <a name="enterprise_slug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug"></a>

```python
enterprise_slug: str
```

- *Type:* str

The slug of the enterprise to apply the IP allow list entry to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip"></a>

```python
ip: str
```

- *Type:* str

An IP address or range of IP addresses in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive"></a>

```python
is_active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the entry is currently active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

An optional name for the IP allow list entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}

---



