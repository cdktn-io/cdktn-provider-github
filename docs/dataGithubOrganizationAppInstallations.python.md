# `dataGithubOrganizationAppInstallations` Submodule <a name="`dataGithubOrganizationAppInstallations` Submodule" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationAppInstallations <a name="DataGithubOrganizationAppInstallations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations github_organization_app_installations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGithubOrganizationAppInstallations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGithubOrganizationAppInstallations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationAppInstallations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.installations">installations</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList">DataGithubOrganizationAppInstallationsInstallationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `installations`<sup>Required</sup> <a name="installations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.installations"></a>

```python
installations: DataGithubOrganizationAppInstallationsInstallationsList
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList">DataGithubOrganizationAppInstallationsInstallationsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationAppInstallationsConfig <a name="DataGithubOrganizationAppInstallationsConfig" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.Initializer"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationAppInstallationsInstallations <a name="DataGithubOrganizationAppInstallationsInstallations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations.Initializer"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationAppInstallationsInstallationsList <a name="DataGithubOrganizationAppInstallationsInstallationsList" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubOrganizationAppInstallationsInstallationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubOrganizationAppInstallationsInstallationsOutputReference <a name="DataGithubOrganizationAppInstallationsInstallationsOutputReference" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer"></a>

```python
from cdktn_provider_github import data_github_organization_app_installations

dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appId">app_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appSlug">app_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.permissions">permissions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.repositorySelection">repository_selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.singleFilePaths">single_file_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.suspended">suspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetId">target_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations">DataGithubOrganizationAppInstallationsInstallations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appId"></a>

```python
app_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_slug`<sup>Required</sup> <a name="app_slug" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appSlug"></a>

```python
app_slug: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.permissions"></a>

```python
permissions: StringMap
```

- *Type:* cdktn.StringMap

---

##### `repository_selection`<sup>Required</sup> <a name="repository_selection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.repositorySelection"></a>

```python
repository_selection: str
```

- *Type:* str

---

##### `single_file_paths`<sup>Required</sup> <a name="single_file_paths" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.singleFilePaths"></a>

```python
single_file_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.suspended"></a>

```python
suspended: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetId"></a>

```python
target_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubOrganizationAppInstallationsInstallations
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations">DataGithubOrganizationAppInstallationsInstallations</a>

---



